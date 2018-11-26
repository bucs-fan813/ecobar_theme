// A $( document ).ready() block.
$( document ).ready(function() {
    var ecobarLocalConfig = {                      // all settings are optional
        "app_id": "NGC179XUHB17D",             // supplied by TF per website
        "network": {
            "trackAnalytics": "false",         // true if registered (default)
            "classification": "unclassified",  // classification level for page's banner
            "classificationPrefix": "",        // add before classification text
            "classificationSuffix": "",        // add after classification text and before Warning text
            // comma-delimited lists of additional links and their titles
            // note: substitute %2C for commas within a URL
            "mapLinkUrls": "https://www.google.com/maps/@38.7588096%2C-77.1923968%2C15z", 
            "mapLinkTitles": "NGA at NCE",
            "searchLinkUrls": "https://www.bing.com, https://www.google.com/",
            "searchLinkTitles": "Bing, Google",
            "feedbackLinkUrls": "https://www.nga.mil/About/Pages/Contact.aspx, mailto:webmaster@nga.mil",
            "feedbackLinkTitles": "Contact NGA, E-mail Feedback"
        },
        "ui": {
            "zIndex": "3030",                       // string for number is preferred (default=7)
            "hideFooter": "false",                  // string for boolean is preferred
            "hideClassification": "false",
            "hideClassificationWarning": "true",
            "appendFooterToSelector": "#bottom",    // div with extra footer or custom positioning
            "siteContentSelector": "#site-content", // wrapper div for sticky footer effect
            "htmlTagHideOverflowXOrY": "X"          // (default=Y)
        }
};

window.ecobarApp && ecobarApp.init( ecobarLocalConfig ) ;    // apply the Ecobar
});