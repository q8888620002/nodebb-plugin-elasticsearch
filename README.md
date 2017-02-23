# Elasticsearch Search for NodeBB

Since the current nodebb search engine does not support Chinese-text search, I decided to use elasticsearch as the search engine not the db engine. So it's important that you have to import t your data from the mongodb/redis to build index for elasticsearch by using mongo-connector or any other plugin 

This is a updated plugin from https://github.com/joe1chen/nodebb-plugin-search-elasticsearch  NodeBB to utilise an installation of Elasticsearch as a search backend which supports Madarin text

## Configuration

1. Install this plugin via npm: `npm install nodebb-plugin-elasticsearch`
1. Activate it in the Plugins page
1. Restart NodeBB
1. Check that the plugin has successfully connected to the search engine. If not, adjust as necessary.

## Installation

    npm install nodebb-plugin-elasticsearch