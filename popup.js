try {

    chrome.tabs.query({ active: true, lastFocusedWindow: true }, tabs => {
        let url = tabs[0].url;
        if (!url.includes("web.javainstitute.org/web-portal")) {
            window.open("https://web.javainstitute.org/web-portal/login/student.jsp", '_blank')
        }
    });
}
catch {
    pass;
}
