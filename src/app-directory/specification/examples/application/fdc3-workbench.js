module.exports = {
    "appId": "fdc3-workbench",
    "name": "fdc3-workbench",
    "title": "FDC3 Workbench",
    "description": "Development and test tool for FDC3 desktop agents and apps",
    "version": "1.0.0",
    "tooltip": "FDC3 Workbench",
    "icons": [
        {
            "url": "http://fdc3.finos.org/toolbox/fdc3-workbench/fdc3-icon-256.png"
        }
    ],
    "images": [
        {
            "url": "https://fdc3.finos.org/docs/assets/fdc3-logo.png",
            "tooltip": "FDC3 logo"
        }
    ],
    "contactEmail": "fdc3@finos.org",
    "supportEmail": "fdc3-maintainers@finos.org",
    "publisher": "FDC3",
    "intents": [
        {
            "name": "ViewChart",
            "displayName": "View Chart",
            "contexts": ["fdc3.instrument"]
        }
    ],
    "type": "browser",
    "details": {
        "url": "https://fdc3.finos.org/toolbox/fdc3-workbench/"
    },
    "hostManifests": {
        "Glue42": {
            "type": "window",
            "icon": "https://fdc3.finos.org/docs/assets/fdc3-logo.png",
            "details": {
                "height": 640,
                "width": 560,
                "left": 120,
                "top": 120,
                "mode": "tab",
                "allowChannels": true,
                "loader": {
                    "enabled": true,
                    "hideOnLoad": true
                }
            },
            "customProperties": {
                "folder": "FDC3 Toolbox"
            }
        },
        "Finsemble": {
            "window": {
                "left": 120,
                "top": 120,
                "width": 800,
                "height": 750,
                "options": {
                    "minWidth": 75
                }
            },
            "foreign": {
                "components": {
                    "App Launcher": {
                        "launchableByUser": true
                    },
                    "Toolbar": {
                        "iconURL": "http://fdc3.finos.org/toolbox/fdc3-workbench/fdc3-icon-256.png"
                    },
                    "Window Manager": {
                        "FSBLHeader": true,
                        "persistWindowState": true
                    }
                }
            },
            "interop": {
                "autoConnect": true
            }
        }
    }
};
