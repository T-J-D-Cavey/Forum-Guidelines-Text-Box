// Scripts:


const customHTMLContainer = document.querySelector("body > main > div.full-width.Template-content > div > div.col.col--side.Sidebar.qa-div-sidebar.custom-sidebar > div > div:nth-child(1) > div");

if (!window.location.href.includes('topic/new')) {
	customHTMLContainer.style.display = 'none';
    }
