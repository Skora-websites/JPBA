export interface District {
  name: string;
  athletes: number;
  status: "recognized" | "pending" | "unaffiliated";
  contact?: string;
  phone?: string;
  representative?: string;
}

export const jharkhandDistricts: District[] = [
  { name: "Ranchi", athletes: 12, status: "recognized", representative: "JPBA Ranchi Unit", phone: "+91-XXXX-XXXXXX" },
  { name: "Hazaribagh", athletes: 8, status: "recognized", representative: "JPBA Hazaribagh Unit" },
  { name: "Dhanbad", athletes: 6, status: "recognized", representative: "JPBA Dhanbad Unit" },
  { name: "Jamshedpur (East Singhbhum)", athletes: 10, status: "recognized", representative: "JPBA East Singhbhum Unit" },
  { name: "Dumka", athletes: 5, status: "recognized", representative: "JPBA Dumka Unit" },
  { name: "Bokaro", athletes: 7, status: "recognized", representative: "JPBA Bokaro Unit" },
  { name: "Deoghar", athletes: 4, status: "pending" },
  { name: "Giridih", athletes: 3, status: "pending" },
  { name: "Ramgarh", athletes: 2, status: "pending" },
  { name: "Chaibasa (West Singhbhum)", athletes: 4, status: "recognized", representative: "JPBA West Singhbhum Unit" },
  { name: "Gumla", athletes: 2, status: "pending" },
  { name: "Lohardaga", athletes: 1, status: "pending" },
  { name: "Palamu", athletes: 2, status: "pending" },
  { name: "Latehar", athletes: 1, status: "unaffiliated" },
  { name: "Chatra", athletes: 1, status: "unaffiliated" },
  { name: "Koderma", athletes: 2, status: "pending" },
  { name: "Jamtara", athletes: 1, status: "unaffiliated" },
  { name: "Sahebganj", athletes: 1, status: "unaffiliated" },
  { name: "Godda", athletes: 1, status: "unaffiliated" },
  { name: "Pakur", athletes: 0, status: "unaffiliated" },
  { name: "Simdega", athletes: 1, status: "unaffiliated" },
  { name: "Khunti", athletes: 2, status: "pending" },
  { name: "Seraikela-Kharsawan", athletes: 2, status: "pending" },
  { name: "Marhum", athletes: 0, status: "unaffiliated" },
];

export const STATS = {
  totalDistricts: 24,
  recognizedDistricts: jharkhandDistricts.filter((d) => d.status === "recognized").length,
  totalAthletes: jharkhandDistricts.reduce((sum, d) => sum + d.athletes, 0),
  sportClasses: 4,
  yearsActive: 3,
};
