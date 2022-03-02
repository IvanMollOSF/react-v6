import { useEffect, useState } from "react";
import Person from './Person';

const SearchParams = () => {
    const [personId, setPersonId] = useState("1");
    const [personData, setPersonData] = useState({});

    function updatePersonId(e) {
        setPersonId(e.target.value);
    }

    async function requestPerson() {
        const res = await fetch(`https://swapi.dev/api/people/${personId}`);
        const data = await res.json();

        console.log(data);
        setPersonData(data);
    }

    useEffect(() => {
        requestPerson();
    }, [personId]);

    return (
        <div className="">
            <form>
                <label htmlFor="person-id">
                    ID
                    <input
                        id="person-id"
                        value={personId}
                        onChange={e => updatePersonId(e)}
                        placeholder="Person id"
                    />
                </label>
                <button type="submit">Search</button>
            </form>
            <div>
                {
                    <Person props={personData} />
                }
            </div>
        </div>
    );
};

export default SearchParams;
