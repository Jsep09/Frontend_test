const fetchEmployee = async () => {
    try {
        let result = await fetch("http://localhost:8000/employees");
        if (!result) {
            throw new Error("Failed to Fetch !!");
        }
        const data = await result.json()
        return data
    } catch (error) {
        console.log(error);
    }


};

export default fetchEmployee;
