# Elasticsearch plugin for NodeBB

## Motivation

Since the current nodebb search engine does not support Chinese-text search, I used the elastic-search  as the content, post and tpoic, search engine. Before doing searching, you must import your data from the original Nodebb-supported database, mongodb/redis ,to elaseticsearch to build index by any otehr plugin.

I am assuming that your are using [mongo-connector](https://github.com/mongodb-labs/mongo-connector) as me.
This is also an updated plugin from [joe1chen](https://github.com/joe1chen/nodebb-plugin-search-elasticsearch) since the original one has been crashed due to the 

## Contributors

[joe1chen](https://github.com/joe1chen/nodebb-plugin-search-elasticsearch)


## Configuration

1. Install this plugin via npm: `npm install nodebb-plugin-elasticsearch`
1. Activate it in the Plugins page
1. Restart NodeBB
1. Check that the plugin has successfully connected to the search engine. If not, adjust as necessary.

## Installation

    npm install nodebb-plugin-elasticsearch
    
##TODO

fixed the topic search issue 