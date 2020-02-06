'use strict';

let numChildren = [1,2,3,4,5];
let partnerNames = ['Ali', 'Ipek', 'Ayse','Ahmet','Murat'];
let locations = ['Netherlands', 'Germany', 'Japan','Russia', 'Turkey'];
let jobs = ['teacher', 'doctor', 'football player','singer', 'developer']

function tellFortune(numberKids, partnerNames, locations, jobs) {
    let yourKids = numberKids[Math.floor(Math.random() * numberKids.length)];
    let yourPartner = partnerNames[Math.floor(Math.random() * partnerNames.length)];
    let yourLocation = locations[Math.floor(Math.random() * locations.length)];
    let yourJob = jobs[Math.floor(Math.random() * jobs.length)];
    return `You will be a ${yourJob} in ${yourLocation}, and married to ${yourPartner} with ${yourKids} kids.`;
}
console.log(tellFortune(numChildren, partnerNames, locations, jobs));
