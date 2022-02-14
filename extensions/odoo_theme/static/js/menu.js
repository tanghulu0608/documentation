/* global _prepareAccordion */ //see utils.js
(function ($) {

    document.addEventListener('DOMContentLoaded', () => {
        this.navigationMenu = document.getElementById('o_main_toctree');

        // Allow to automatically collapse and expand TOC entries
        _prepareAccordion(this.navigationMenu);

        // Allow to respectively highlight and expand the TOC entries and their related TOC
        // entry list whose page is displayed.
        _flagActiveTocEntriesAndLists();

        // Show hidden menu when the css classes have been properly specified
        this.navigationMenu.removeAttribute('hidden');

        // add onclick listeners when clicking on a version or language
        _prepareOnSwitcherClick();
    });

    /**
     * Add the relevant classes on the TOC entries (and lists) whose page is displayed.
     *
     * TOC entries (<li> elements) that are on the path of the displayed page receive the
     * `o_active_toc_entry` class, and their related (parent) TOC entry list (<ul> elements) receive
     * the `show` (Bootstrap) class.
     * Also, the deepest TOC entries of their respective branch receive the
     * `o_deepest_active_toc_entry` class, and their child TOC entry lists receive the `show` class.
     */
    const _flagActiveTocEntriesAndLists = () => {
        const regexLayer = /\btoctree-l(?<layer>\d+)\b/;
        let lastLayer = undefined;
        let lastTocEntry = undefined;
        const deepestTocEntries = [];
        this.navigationMenu.querySelectorAll('.current').forEach(element => {
            if (element.tagName === 'UL') {
                element.classList.add('show'); // Expand all related <ul>
            } else if (element.tagName === 'LI') {
                element.classList.add('o_active_toc_entry'); // Highlight all active <li>
                let match = regexLayer.exec(element.className);
                let currentLayer = parseInt(match.groups.layer, 10);
                if (lastLayer && currentLayer <= lastLayer) { // We just moved to another branch
                    deepestTocEntries.push(lastTocEntry);
                }
                lastLayer = currentLayer;
                lastTocEntry = element;
            }
        })
        if (lastTocEntry) {
            deepestTocEntries.push(lastTocEntry); // The last TOC entry is the deepest of its branch
        }
        deepestTocEntries.forEach(deepestTocEntry => {
            const childTocEntryList = deepestTocEntry.querySelector('ul');
            if (childTocEntryList) {
                childTocEntryList.classList.add('show');
            } else { // If the toc entry is not a TOC, add the class to its closest ancestor entry
                deepestTocEntry = deepestTocEntry.parentElement.parentElement;
            }
            deepestTocEntry.classList.add('o_deepest_active_toc_entry');
        });
    };

     document.addEventListener('scroll', () => {
         // Allow to hide the searchbar when the page is scrolled in mobile.
         _flagHeaderWithScrollPosition();
     });

    /**
     * Add/Remove the class `o_header_scrolled` on the header according to the scroll position.
     */
     const _flagHeaderWithScrollPosition = () => {
         const header = document.querySelector('.o_main_header');
         if (this.scrollY > 0) {
             header.classList.add('o_header_scrolled');
         } else {
             header.classList.remove('o_header_scrolled');
         }
     };

    const _prepareOnSwitcherClick = () => {
        [...document.getElementsByClassName('dropdown-item')].
            filter(i => (i.tagName === "A" && i.getAttribute("href"))).
            forEach(dropdownItem => {
                dropdownItem.addEventListener("click", e => {
                    _findClosestValidUrl(dropdownItem.getAttribute("href"));
                });
            });
    };

    /**
     * Test url and find best alternative if not available
     * Test order:
     * 1. /documentation/15.0/fr/administration/install/install.html
     * 2. /documentation/15.0/administration/install/install.html
     * 3. /documentation/15.0/fr/
     * 4. /documentation/15.0/
     * 5. /documentation/
     */
    const _findClosestValidUrl = (url) => {
        const fragments = url.split("/");
        let path = "";
        let version = "";
        let language = "";
        for (let f of fragments.reverse()){
            if (f.match(/((^\d{2}\.\d$)|(^saas\-\d{2}.\d$)|(^master$))/)) {
                version = f;
                break;
            } else if (f.match(/((^[a-z]{2}_[A-Z]{2})$|^([a-z]{2})$)/)) {
                language = f;
            } else {
                path = (path ? f + "/" + path : f);
            }
        }
        const urls = [url]
        if (version && language)
            urls.push(
                url.replace(version + "/" + language + "/" + path,
                            version + "/" + path),
                url.replace(version + "/" + language + "/" + path,
                            version + "/" + language + "/index.html"),
                url.replace(version + "/" + language + "/" + path,
                            version + "/index.html"),
                url.replace(version + "/" + language + "/" + path,
                            "index.html"));
        else if (version && !language)
            urls.push(
                url.replace(version + "/" + path,
                            version + "/index.html"),
                url.replace(version + "/" + path,
                            "index.html"));
        else if (!version && !language)
            urls.push(
                url.replace(path,
                            "index.html"));

        _testFetchUrl(urls);
    };

    const _testFetchUrl = (urls) => {
        const url = urls.shift();
        if (urls.length == 0 || url.startsWith("file:///")) {
            window.location.href = url;
            return;
        }

        fetch(url).then(resp => {
            if (resp.ok) {
                // success, navigate
                window.location.href = url;
            } else {
                // 404, try next one
                _testFetchUrl(urls);
            }
        });
    };



})();
