export async function POST(req: Request) {
    try {
      const body = await req.json(); // Read JSON from frontend
  
      // Send data to Google Apps Script
      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbxKNH2aWertdKR5uruqF1-K2zHEfiwrKfgrRAqtWrPVsHwIyYjKRqN4MP_qNE5GykEL/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        }
      );
  
      const json = await res.json();
  
      return new Response(JSON.stringify(json), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(
        JSON.stringify({ success: false, error: (err as Error).message }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }
  }
  