document.addEventListener("DOMContentLoaded", () => {
    const soundSelect = document.getElementById("soundSelect");
    const diseaseButton = document.getElementById("diseaseButton");

    // Bangla stethoscope sounds mapped to Bangla disease names
    const soundDiseaseMap = {
        "স্বাভাবিক শ্বাসের শব্দ": "কোন রোগ নেই",
        "চিওচিও শব্দ": "হার্টের ছিদ্র",
        "শনশন শব্দ": "অ্যাজমা বা ব্রঙ্কাইটিস",
        "বিলম্বিত হার্ট স্পন্দন": "হৃদপিণ্ডের ব্লক",
        "চাপা শ্বাসের শব্দ": "নিউমোথোরাক্স (ফুসফুস ধসে যাওয়া)",
        "শাঁ শাঁ শব্দ": "রক্ত প্রবাহের বাধা বা স্টেনোসিস",
        "চু চু শব্দ": "হৃদপিণ্ডের ভালভের ফাঁক",
        "গোঙানির শব্দ": "ক্রনিক ব্রঙ্কাইটিস",
        "শোঁ শোঁ শব্দ": "অ্যাজমা বা সিওপিডি",
        "চটচট শব্দ": "নিউমোনিয়া বা ফুসফুসের পানি জমা",
        "ঘর্ষণ শব্দ": "প্লিউরাল ঘর্ষণ",
        "গড়গড় শব্দ": "শ্বাসনালীতে সিক্রেশন জমা",
        "উচ্চ শব্দ": "লারিঙ্গোমালেশিয়া (শ্বাসনালীর নরমতা)",
        "নিম্ন শব্দ": "ট্রেকিওমালেশিয়া (শ্বাসনালীর দুর্বলতা)",
        "রোঙ্কাই শব্দ": "শ্বাসনালীতে বাধা",
        "বহুস্বর": "ছোট শ্বাসনালীতে বাধা",
        "একক স্বর": "বড় শ্বাসনালীতে বাধা",
        "প্লিউরাল শব্দ": "প্লিউরাল এফিউশন",
        "এগোফনি": "ফুসফুসে জমাট বাঁধা",
        "ব্রঙ্কিয়াল শব্দ": "ব্রঙ্কাইটিস"
    };

    // Dynamically populate the dropdown menu
    Object.keys(soundDiseaseMap).forEach(sound => {
        const option = document.createElement("option");
        option.value = sound;
        option.textContent = sound; // Directly use the Bangla sound name
        soundSelect.appendChild(option);
    });

    // Show corresponding disease when a sound is selected
    soundSelect.addEventListener("change", () => {
        const selectedSound = soundSelect.value;
        if (selectedSound && soundDiseaseMap[selectedSound]) {
            diseaseButton.textContent = soundDiseaseMap[selectedSound];
            diseaseButton.classList.remove("d-none");
        } else {
            diseaseButton.classList.add("d-none");
        }
    });
});
