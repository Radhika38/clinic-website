
const patientName = "Radhika";

const consultationFee = 500;
const medicineCharges = 800;
const labTestCharges = 300;
const discount = 100;

// Calculate total bill
const totalBill = consultationFee + medicineCharges + labTestCharges;

// Calculate final bill
const finalBill = totalBill - discount;

// Display bill
console.log("===== PATIENT BILL =====");
console.log("Patient Name:", patientName);
console.log("Consultation Fee: ₹", consultationFee);
console.log("Medicine Charges: ₹", medicineCharges);
console.log("Lab Test Charges: ₹", labTestCharges);
console.log("Total Bill: ₹", totalBill);
console.log("Discount: ₹", discount);
console.log("Final Bill: ₹", finalBill);
