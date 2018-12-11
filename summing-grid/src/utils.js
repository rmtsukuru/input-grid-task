function formatNumber(x) {
    let result = x.toPrecision(3);
    if (Math.abs(x) >= 1000000000000) {
        result = (x / 1000000000000).toPrecision(3) + 'T';
    }
    else if (Math.abs(x) >= 1000000000) {
        result = (x / 1000000000).toPrecision(3) + 'B';
    }
    else if (Math.abs(x) >= 1000000) {
        result = (x / 1000000).toPrecision(3) + 'M';
    }
    else if (Math.abs(x) >= 1000) {
        result = (x / 1000).toPrecision(3) + 'K';
    }
    return result.includes('.') ? result.replace(/\.?0+($|T$|B$|M$|K$)/, '$1') : result;
}

export {
  formatNumber,
};
