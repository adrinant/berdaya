import { google } from "googleapis";

const auth = new google.auth.GoogleAuth({
  credentials: {
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? "",
    client_email: "spreadsheets@berdaya-ai.iam.gserviceaccount.com",
  },
  scopes: [
    "https://www.googleapis.com/auth/spreadsheets",
    "https://www.googleapis.com/auth/drive",
  ],
});

const sheets = google.sheets({ version: "v4", auth });

const SPREADSHEET_ID: string | null = "1C-hbOPJe8E0vUUNCYbN3KOjT8yB8RWmVrucSqksouEY";
const SHEET_NAME = "Registration";

export async function appendToSheet(data: {
  teamName: string;
  memberName: string;
  institution: string;
  teamDescription?: string;
  email: string;
  feedback: string;
}) {
  try {
    if (!SPREADSHEET_ID) {
      throw new Error("Spreadsheet ID is not set.");
    }

    // Format the data as a row
    const values = [
      [
        data.teamName,
        data.memberName,
        data.institution,
        data.teamDescription || "",
        data.email,
        data.feedback || "",  // This will handle both undefined and empty string
        new Date().toISOString(),
      ],
    ];

    // Append the row to the sheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:F`, // Updated range to include new columns
      valueInputOption: "RAW",
      requestBody: {
        values,
      },
    });

    console.log("Data appended to sheet:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error appending to sheet:", error);
    throw error;
  }
}