/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

const makeHashTable = () => {
  const result = {};
  const storage = [];

  let storageLimit = 4;
  result.size = 0;

  result.storageForTest = storage;

  const resize = (prevSize, newSize) => {
    // redefine storage?

    // loop through each bucket

      // loop through each node

      // find the new index for that key

      // add it to the new storage

    // reset the storage limit
  };

  result.insert = (key, value) => {
    // if the size + 1 is > 3/4 of the limit
    if (result.size + 1 < 0.75 * storageLimit) {
      // resize the hash table
      resize(storageLimit, storageLimit * 2);
    }
    // get the appropriate bucket from the storage array
    let index = getIndexBelowMaxForKey(key, storageLimit);
    let bucket = storage[index];
    // if there already is a bucket at that index
    if (bucket) {
      // loop through the bucket at that index
      bucket.forEach( tuple => {
        let existingKey = tuple[0];
        // if the first item in any of the tuples is that key, replace the value
        if (existingKey === key) {
          tuple[1] = value;
        }
      });
    // if there's nothing at that index yet
    } else {
      // create an array at that index
      let bucket = [];
      storage[index] = bucket;
      // add the key-value pair as a tuple to that array
      bucket.push([key, value]);
      // increment the size property since we'll be adding in any
      result.size++;
      console.log("key: ", key);
      console.log("result.size: ", result.size);
    }
  };

  result.retrieve = (key) => {
    // get the index from the hashing function

    // loop through the bucket at that index

      // if the first item in a tuple is ever that key, return the value

    // otherwise return undefined

  };

  result.remove = (key) => {
    // get the index from the hashing function

    // loop through the bucket at that index

      // if the first item in a tuple is ever that key, slice that tuple from the bucket and return it

    // otherwise return undefined
  };

  return result;
};

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
const getIndexBelowMaxForKey = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

module.exports = { makeHashTable, getIndexBelowMaxForKey };
