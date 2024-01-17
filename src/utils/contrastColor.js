function getContrastColor(bgColor) {
    if (!bgColor) {
        return "";
    }

    // Remove the hash if it's there
    bgColor = bgColor.slice(bgColor.charAt(0) === "#" ? 1 : 0);

    // Convert three-digit hex to six-digits.
    if (bgColor.length === 3) {
        bgColor = bgColor
            .split("")
            .map(function (hex) {
                return hex + hex;
            })
            .join("");
    }

    // Get the red, green, and blue values
    var r = parseInt(bgColor.slice(0, 2), 16);
    var g = parseInt(bgColor.slice(2, 4), 16);
    var b = parseInt(bgColor.slice(4, 6), 16);

    // Calculate the brightness
    var brightness = (r * 299 + g * 587 + b * 114) / 1000;

    // If the brightness is over 128, return black. If it's under, return white.
    return brightness > 128 ? "black" : "white";
}

export default getContrastColor;
