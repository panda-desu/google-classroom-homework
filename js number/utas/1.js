let dugaar = prompt('utasnii dugaaraa oruulna uu', "+976"); let urtlih = dugaar.substring(0, 4);
dugaar.length === 12 && urtlih === '+976' ? Number(dugaar.substring(4, 12)) > 1 ? console.log("utasni dugaar zuv bn") : console.log('utasni dugar bish bn') : console.log('aldaa')