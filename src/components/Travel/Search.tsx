import { useState } from "react";

type SearchProps = {
    onSearchResults: (data: any) => void;
  };

export function Search({onSearchResults}: SearchProps) {
    const [city, setCity] = useState("");

    async function fetchData(query: string) {

        const url = 'https://travel-advisor.p.rapidapi.com/locations/v2/search?currency=USD&units=km&lang=en_US';

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '5d1b13838emsh7dc20092a43e100p1da1c7jsnd6057f786dd5',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    query: query,
                    updateToken: ''
                })
            });
            const result = await response.json();
            onSearchResults(result);
        } catch (error) {
            console.error(error);
        }
    }

    function handleSubmit (e: React.FormEvent) {
        e.preventDefault();
        if (city.trim().length > 0) {
            fetchData(city.trim());
        }
    }

    return (
        <nav className="flex justify-between py-6 px-6 bg-gray-50">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="border px-3 py-2 font-semibold rounded-xl"
                    name="search"
                    placeholder="search city"
                    // value={city}
                    onChange={e => setCity(e.target.value)}
                />
            </form>
        </nav>
    );
}
