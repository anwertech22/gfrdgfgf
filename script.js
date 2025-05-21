// الأسعار الافتراضية
const defaultPrices = {
  TikTok: [
    { name: "1000 متابع", price: "$5" },
    { name: "5000 متابع", price: "$20" },
    { name: "10000 متابع", price: "$35" },
    { name: "1000 مشاهدة فيديو", price: "$3" },
    { name: "1000 لايك", price: "$2.5" }
  ],
  Instagram: [
    { name: "1000 متابع", price: "$6" },
    { name: "5000 متابع", price: "$25" },
    { name: "10000 متابع", price: "$45" },
    { name: "1000 لايك", price: "$3" },
    { name: "1000 مشاهدة ستوري", price: "$2.5" }
  ],
  Facebook: [
    { name: "1000 متابع", price: "$5.5" },
    { name: "5000 متابع", price: "$22" },
    { name: "10000 متابع", price: "$40" },
    { name: "1000 لايك", price: "$3" },
    { name: "1000 مشاركة", price: "$4" }
  ],
  Telegram: [
    { name: "1000 مشترك", price: "$4" },
    { name: "5000 مشترك", price: "$18" },
    { name: "10000 مشترك", price: "$32" },
    { name: "1000 مشاهدة", price: "$2" },
    { name: "1000 تعليق", price: "$3.5" }
  ]
};

// حفظ الأسعار
function savePrices(prices) {
  localStorage.setItem("servicePrices", JSON.stringify(prices));
}

// تحميل الأسعار
function loadPrices() {
  const saved = localStorage.getItem("servicePrices");
  return saved ? JSON.parse(saved) : defaultPrices;
}