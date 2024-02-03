function getEmailUsername(email) {
    const atIndex = email.indexOf('@');
    if (atIndex !== -1) {
        return email.substring(0, atIndex);
    } else {
        return null;
    }
}

function getRemainingString(fullString, substring) {
  if (fullString.includes(substring)) {
    const index = fullString.indexOf(substring);
    return fullString.slice(index + substring.length);
  } else {
    return fullString;
  }
}

function getPartBeforeSubstring(fullString, substring) {
    if (fullString.includes(substring)) {
      const index = fullString.indexOf(substring);
      return fullString.slice(0, index);
    } else {
      return fullString;
    }
  }

module.exports = {getEmailUsername, getRemainingString, getPartBeforeSubstring}