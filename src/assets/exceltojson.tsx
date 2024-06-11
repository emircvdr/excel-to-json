import * as XLSX from 'xlsx'
const excelToJson = (file: File, callback: (data: string[][] | null) => void) => {
    const reader = new FileReader();

    reader.onload = (e) => {
        const data = e.target?.result;
        if (data) {

            const workbook = XLSX.read(data, { type: 'binary' });

            const sheetName = workbook.SheetNames[0];

            const sheet = workbook.Sheets[sheetName];

            const jsonData: string[][] = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            callback(jsonData);
        } else {
            callback(null);
        }
    };

    reader.readAsBinaryString(file);
};

export default excelToJson;