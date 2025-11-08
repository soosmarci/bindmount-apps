// This script runs inside the MongoDB shell (mongosh).

try {
    // FIX: Use print() for MongoDB shell output
    print(`Get replica set status...`);
    rs.status();
    print(`Replica set already initialized...`);
} catch (e) {
    print(`Replica set not initialized. Running rs.initiate()...`);

    rs.initiate(
        {
            _id: "rs0",
            // CRITICAL FIX: Use 127.0.0.1 for the internal loopback validation
            members: [{ _id: 0, host: "127.0.0.1:27018" }]
        }
    );
    print(`Replica set initiated. Waiting for PRIMARY...`);
}