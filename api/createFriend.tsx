const createFriend = async(url: string, payload: any) => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: payload
    };
    try {
        return await fetch(url, requestOptions);
    } catch (error) {
        console.log("Error in upload friend data : ", error);
    }
  };
  
  export default createFriend;