function curriedAdd(total=null) {
    if (total === null) {
        return 0;
    }
    return function adder(added=null) {
        if (added === null) {
            return total;
        }
        total += added
        return adder;
    }
}

module.exports = { curriedAdd };
