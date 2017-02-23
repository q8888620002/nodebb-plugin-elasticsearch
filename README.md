# Elasticsearch plugin for NodeBB

## Motivation

Since the current nodebb search engine seems not to support Chinese-text search, I choose the elasticsearch as the content, post and topic, search engine. 
I found  [nodebb-plugin-search-elasticsearch](https://github.com/joe1chen/nodebb-plugin-search-elasticsearch)  but the original author doesn't maintain it anymore. I made few modification of it. 

Before doing searching, remember to **start elasticsearch** and **import your data from the original Nodebb-supported database, mongodb/redis ,to elaseticsearch to build index** by any plugin you use. (I am using  [mongo-connector](https://github.com/mongodb-labs/mongo-connector).)

## Contributors

[joe1chen](https://github.com/joe1chen/nodebb-plugin-search-elasticsearch)


## Configuration

1. Install the lastest version of [elasticsearch](https://www.elastic.co/products/elasticsearch)
1. Import your data into elasticsearch by any plugin such as [mongo-connector](https://github.com/mongodb-labs/mongo-connector).)
1. Install this plugin via npm: `npm install nodebb-plugin-elasticsearch`
1. Activate it in the Plugins page
1. Restart NodeBB
1. Check that the plugin has successfully connected to the search engine. If not, adjust as necessary.

## Installation

    npm install nodebb-plugin-elasticsearch
    
##TODO

fixed the topic search issue 