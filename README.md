##### 2 packages you need

```
meteor add ostrio:neo4jreactivity
meteor add d3js:d3
```

##### Neo4j initial data

```
CREATE (a1:METEOR {title: "Korea", body: "Make graph"})
CREATE (a2:METEOR {title: "Graph", body: "Make graph"})
CREATE (a3:METEOR {title: "Getting started", body: "Make graph"})
CREATE (a4:METEOR {title: "Neo4j", body: "Make graph"})
CREATE (a5:METEOR {title: "Meteor", body: "Make graph"})
CREATE (a6:METEOR {title: "Meteor Korea", body: "Make graph"})
CREATE (a7:METEOR {title: "Visualization", body: "Make graph"})
CREATE (a1)-[r1:Weight]->(a2)
CREATE (a1)-[r2:Weight]->(a3)
CREATE (a1)-[r3:Weight]->(a4)
CREATE (a2)-[r4:Weight]->(a3)
CREATE (a3)-[r5:Weight]->(a4)
CREATE (a3)-[r6:Weight]->(a5)
CREATE (a3)-[r7:Weight]->(a2)
CREATE (a3)-[r8:Weight]->(a1)
CREATE (a4)-[r9:Weight]->(a1)
CREATE (a5)-[r10:Weight]->(a4)
CREATE (a5)-[r11:Weight]->(a1)
```


##### When you delete all data on Neo4j

```
MATCH (n) OPTIONAL MATCH (n)-[r]-() DELETE n,r
```

##### Synchronization with MongoDB on Meteor and Neo4j is not completed yet.
