To fix this, ensure you handle the asynchronous nature of data retrieval using promises or async/await.  Here's how you can modify your code:

**Using Promises:**
```javascript
db.collection('yourCollection').doc('yourDoc').get()
.then(snapshot => {
  if (snapshot.exists) {
    const data = snapshot.data();
    // Access data here, it's guaranteed to be loaded
    console.log(data.propertyName);
  } else {
    console.log('No such document!');
  }
}).catch(error => {
  console.error('Error getting document:', error);
});
```
**Using Async/Await:**
```javascript
async function getData() {
  try {
    const snapshot = await db.collection('yourCollection').doc('yourDoc').get();
    if (snapshot.exists) {
      const data = snapshot.data();
      // Access data here, it's guaranteed to be loaded
      console.log(data.propertyName);
    } else {
      console.log('No such document!');
    }
  } catch (error) {
    console.error('Error getting document:', error);
  }
}

getData();
```
This ensures that the code waits for the data to be loaded before attempting to access it, preventing the error.