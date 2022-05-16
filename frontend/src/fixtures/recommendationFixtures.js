const recommendationFixtures = {
    oneRecommendationCommons: {
        "id": "1",
        "requesterEmail": "aadityachannabasappa@ucsb.edu",
        "professorEmail": "myProf@ucsb.edu",
        "explanation": "Needed for Research",
        "dateRequested": "2022-05-16T12:04:00",
        "dateNeeded": "2022-06-10T00:00:00",
        "done": false
    },
    threeRecommendation: [
        {
            "id": "1",
            "requesterEmail": "aadityachannabasappa@ucsb.edu",
            "professorEmail": "myProf@ucsb.edu",
            "explanation": "Needed for Research",
            "dateRequested": "2022-05-16T12:04:00",
            "dateNeeded": "2022-06-10T00:00:00",
            "done": false
        },
        {
            "id": "2",
            "requesterEmail": "student1@ucsb.edu",
            "professorEmail": "myProf2@ucsb.edu",
            "explanation": "Needed for Internship",
            "dateRequested": "2022-03-05T03:08:10",
            "dateNeeded": "2022-04-13T02:04:10",
            "done": true
        },
        {
            "id": "3",
            "requesterEmail": "student3@ucsb.edu",
            "professorEmail": "myProf@ucsb.edu",
            "explanation": "Needed for Job",
            "dateRequested": "2022-05-16T12:04:00",
            "dateNeeded": "2023-06-10T00:00:00",
            "done": false
        } 
    ]
};


export { recommendationFixtures };