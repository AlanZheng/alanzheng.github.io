$(function() {

	CMS.init({

		// Name of your site or location of logo file ,relative to root directory (img/logo.png)
		siteName: '',

		// Tagline for your site
		siteTagline: '',

		// Email address
		siteEmail: 'microsuncn@gmail.com',

		// Name
		siteAuthor: 'AlanZheng',

		// Navigation items
		siteNavItems: [
			//{ name: 'Github', href: 'https://github.com/alanzheng', newWindow: false},
			//{ name: 'About'}
		],

		// Posts folder name
		postsFolder: 'tutorials',

		// Homepage posts snippet length
		postSnippetLength: 120,

		// Pages folder name
		pagesFolder: 'tutorials',

		// Site fade speed
		fadeSpeed: 300,

		// Site footer text
		footerText: '&copy; ' + new Date().getFullYear() + ' All Rights Reserved.',

		// Mode 'Github' for Github Pages, 'Apache' for Apache server. Defaults
		// to Github
		mode: 'Github',

		// If Github mode is set, your Github username and repo name. Defaults
		// to Github pages branch (gh-pages)
		githubUserSettings: {
			username: 'alanzheng',
			repo: 'alanzheng.github.io'
		}

	});

	// Markdown settings
	marked.setOptions({
		renderer: new marked.Renderer(),
		gfm: true,
		tables: true,
		breaks: false,
		pedantic: false,
		sanitize: true,
		smartLists: true,
		smartypants: false
	});

});
