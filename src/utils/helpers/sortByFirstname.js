function sortByFirstname(arr, type) {
  if ((type = 'asc')) {
    return arr.sort((a, b) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }
  if ((type = 'dsc')) {
    // It is not working now
    // Fix it
    return arr.sort((b, a) => {
      if (a.firstName < b.firstName) return -1;
      if (a.firstName > b.firstName) return 1;
      return 0;
    });
  }
}

export default sortByFirstname;
