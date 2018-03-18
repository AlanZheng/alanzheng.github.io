window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
 
//prefixes of window.IDB objects
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
 
if (!window.indexedDB) {
    window.alert("Your browser doesn't support a stable version of IndexedDB.")
}

var db = null;
var storeName = "mynotes";
var objectStore = null;
var highestZ = 0;
var captured = null;

var request = window.indexedDB.open("myNoteDB", 1);
 
request.onerror = function(event) {
    console.log("error: ");
};
 
request.onsuccess = function(event) {
    db = request.result;
    console.log("success: "+ db);
    
    document.getElementById("newNoteButton").disabled = !db;
    if (db != null) loadNotes();
};
 
request.onupgradeneeded = function(event) {
    db = event.target.result;
    objectStore = db.createObjectStore(storeName, {keyPath: "id"});
}

function Note()
{
    var self = this;

    var note = document.createElement('div');
    note.className = 'note';
    note.addEventListener('mousedown', function(e) { return self.onMouseDown(e) }, false);
    note.addEventListener('touchstart', function(e) { return self.onTouchStart(e) }, false);
    note.addEventListener('click', function() { return self.onNoteClick() }, false);
    this.note = note;

    var close = document.createElement('div');
    close.className = 'closebutton';
    close.addEventListener('click', function(event) { return self.close(event) }, false);
    close.addEventListener('touchend', function(event) { return self.close(event) }, false);
    note.appendChild(close);

    var edit = document.createElement('div');
    edit.className = 'edit';
    edit.setAttribute('contenteditable', true);
    edit.addEventListener('keyup', function() { return self.onKeyUp() }, false);
    note.appendChild(edit);
    this.editField = edit;

    var ts = document.createElement('div');
    ts.className = 'timestamp';
    ts.addEventListener('mousedown', function(e) { return self.onMouseDown(e) }, false);
    ts.addEventListener('touchstart', function(e) { return self.onTouchStart(e) }, false);
    note.appendChild(ts);
    this.lastModified = ts;

    document.body.appendChild(note);
    return this;
}

Note.prototype = {
    get id()
    {
        if (!("_id" in this))
            this._id = 0;
        return this._id;
    },

    set id(x)
    {
        this._id = x;
    },

    get text()
    {
        return this.editField.innerHTML;
    },

    set text(x)
    {
        this.editField.innerHTML = x;
    },

    get timestamp()
    {
        if (!("_timestamp" in this))
            this._timestamp = 0;
        return this._timestamp;
    },

    set timestamp(x)
    {
        if (this._timestamp == x)
            return;

        this._timestamp = x;
        var date = new Date();
        date.setTime(parseFloat(x));
        this.lastModified.textContent = modifiedString(date);
    },

    get left()
    {
        return this.note.style.left;
    },

    set left(x)
    {
        this.note.style.left = x;
    },

    get top()
    {
        return this.note.style.top;
    },

    set top(x)
    {
        this.note.style.top = x;
    },

    get zIndex()
    {
        return this.note.style.zIndex;
    },

    set zIndex(x)
    {
        this.note.style.zIndex = x;
    },

    close: function(event)
    {
        this.cancelPendingSave();
        
        var self = this;
        var request = db.transaction([storeName], "readwrite").objectStore(storeName).delete(self.id);
        request.onsuccess = function(event) {};
        
        var duration = event.shiftKey ? 2 : .25;
        this.note.style.webkitTransition = '-webkit-transform ' + duration + 's ease-in, opacity ' + duration + 's ease-in';
        this.note.offsetTop; // Force style recalc
        this.note.style.webkitTransformOrigin = "0 0";
        this.note.style.webkitTransform = 'skew(30deg, 0deg) scale(0)';
        this.note.style.opacity = '0';

        setTimeout(function() { document.body.removeChild(self.note) }, duration * 1000);
    },

    saveSoon: function()
    {
        this.cancelPendingSave();
        var self = this;
        this._saveTimer = setTimeout(function() { self.save() }, 200);
    },

    cancelPendingSave: function()
    {
        if (!("_saveTimer" in this))
            return;
        clearTimeout(this._saveTimer);
        delete this._saveTimer;
    },

    save: function()
    {
        this.cancelPendingSave();

        if ("dirty" in this) {
            this.timestamp = new Date().getTime();
            delete this.dirty;
        }

        var note = this;
        
        var transaction = db.transaction([storeName], "readwrite");
        var store = transaction.objectStore(storeName);

        var req = store.openCursor();
        req.onerror = function(event) {
          console.log("case if have an error");
        };

        req.onsuccess = function(event) {
            var cursor = event.target.result;
            if(cursor){
                if(cursor.value.id == note.id){
                    var info = {};
                    info.id = note.id;
                    info.text = note.text;
                    info.timestamp = note.timestamp;
                    info.left = note.left;
                    info.top = note.top;
                    info.zindex = note.zIndex;

                    var res = cursor.update(info);
                    res.onsuccess = function(e){
                        console.log("update success!!");
                    }
                    res.onerror = function(e){
                        console.log("update failed!!");
                    }
                }
                cursor.continue();
            }
            else{
                console.log("fin mise a jour");
            }
        }
    },

    saveAsNew: function()
    {
        this.timestamp = new Date().getTime();
        
        var note = this;
        var request = db.transaction([storeName], "readwrite").objectStore(storeName)
                .add({ id: note.id, note: note.text, timestamp: note.timestamp, left: note.left, top: note.top, zindex: note.zIndex });

        request.onsuccess = function(event) {
        };
         
        request.onerror = function(event) {
        }
    },

    onMouseDown: function(e)
    {
        captured = this;
        this.startX = e.clientX - this.note.offsetLeft;
        this.startY = e.clientY - this.note.offsetTop;
        this.zIndex = ++highestZ;

        var self = this;
        if (!("mouseMoveHandler" in this))
        {
            this.mouseMoveHandler = function(e) { return self.onMouseMove(e) }
            this.mouseUpHandler = function(e) { return self.onMouseUp(e) }
        }

        document.addEventListener('mousemove', this.mouseMoveHandler, true);
        document.addEventListener('mouseup', this.mouseUpHandler, true);

        return false;
    },

    onMouseMove: function(e)
    {
        if (this != captured)
            return true;

        this.left = e.clientX - this.startX + 'px';
        this.top = e.clientY - this.startY + 'px';
        return false;
    },
    
    onMouseUp: function(e)
    {
        document.removeEventListener('mousemove', this.mouseMoveHandler, true);
        document.removeEventListener('mouseup', this.mouseUpHandler, true);

        this.save();
        return false;
    },
    
    onTouchStart: function(e)
    {
        captured = this;
        
        e.preventDefault(); // prevent scroll
        
        this.startX = e.touches[0].pageX - this.note.offsetLeft;
        this.startY = e.touches[0].pageY - this.note.offsetTop;
        this.zIndex = ++highestZ;

        document.addEventListener('touchmove', this.onTouchMove, false);
        document.addEventListener('touchend', this.onTouchEnd, false);
        
        this.onNoteClick();

        return false;
    },
    
    onTouchMove: function(e)
    {
        var self = this;
        if (this != captured)
            self = captured;
            
        //e.preventDefault(); // prevent scroll

        self.left = e.touches[0].pageX - self.startX + 'px';
        self.top = e.touches[0].pageY - self.startY + 'px';
        return false;
    },
    
    onTouchEnd: function(e)
    {
        var self = this;
        if (this != captured)
            self = captured;
            
        document.removeEventListener('touchmove', self.onTouchMove, true);
        document.removeEventListener('touchend', self.onTouchEnd, true);

        self.save();
        return false;
    },
    
    onNoteClick: function(e)
    {
        this.editField.focus();
        getSelection().collapseToEnd();
    },

    onKeyUp: function()
    {
        this.dirty = true;
        this.saveSoon();
    },
}

function loadNotes()
{
    var objectStore = db.transaction(storeName).objectStore(storeName);
    objectStore.openCursor().onsuccess = function(event)
    {
        var cursor = event.target.result;
        if (cursor)
        {
            var note = new Note();
            note.id = cursor.key;
            note.text = cursor.value.text;
            note.timestamp = cursor.value.timestamp;
            note.left = cursor.value.left;
            note.top = cursor.value.top;
            note.zIndex = cursor.value.zIndex;
            
            if (note.zIndex > highestZ) highestZ = note.zIndex;
                    
            cursor.continue();
        }
    };
}

function modifiedString(date)
{
    return 'Last Modified: ' + date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + ' ' + date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
}

function newNote()
{
    var note = new Note();
    note.timestamp = new Date().getTime();
    note.id = note.timestamp;
    note.left = Math.round(Math.random() * 400) + 'px';
    note.top = Math.round(Math.random() * 500) + 'px';
    note.zIndex = ++highestZ;
    note.saveAsNew();
}