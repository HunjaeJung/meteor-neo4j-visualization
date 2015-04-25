// When you use remote server
// Meteor.neo4j.connectionURL = "http://neo4j:[password]@address:7474";

// This methods can be used on client.
Meteor.neo4j.methods({
  'getAllNodes': function(){
    var query = [
      'MATCH (n:METEOR)',
      'RETURN n'
    ].join(' ');

    return query;
  },
  'getAllEdges': function(){
    var query = [
      'MATCH (a:METEOR)-[r:Weight]->(b:METEOR)',
      'RETURN r'
    ].join(' ');

    return query;
  }
});
