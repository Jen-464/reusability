import { useEffect } from "react";

type HotelProps = {
    geoId: string;
}

export function Hotel({ geoId }: HotelProps) {
    async function fetchHotels(id: string) {
        const url = 'https://travel-advisor.p.rapidapi.com/hotels/v2/list?currency=USD&units=km&lang=en_US';
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'x-rapidapi-key': '5d1b13838emsh7dc20092a43e100p1da1c7jsnd6057f786dd5',
                    'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    geoId: id,
                    // checkIn: '2025-07-15',
                    // checkOut: '2025-07-20',
                    // rooms: [{ adults: 2 }]
                })
            });
            console.log("Status:", response.status);
            const text = await response.text();
            console.log("Raw response text:", text || "[empty]");

            if (text) {
                const data = JSON.parse(text);
                console.log("Parsed hotel data:", data);
            } else {
                console.warn("✅ 204: Request successful, but no content returned.");
            }

            // const result = await response.text();
            // console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchHotels(geoId);
    }, [geoId])
    return (
        <p>listing the geo id {geoId}</p>
    )
}