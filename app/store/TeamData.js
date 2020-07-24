Ext.define('MyApp.store.TeamData', {
    extend: 'Ext.data.Store',
    alias: 'store.nfldata',

    model: 'MyApp.model.NFLData',

    data: [
        {
            division: "AFC East",
            name: "New England Patriots",
            wins: 12,
            losses: 4,
            pctRatio: .750
        },
        {
            division: "AFC East",
            name: "Buffalo Bills",
            wins: 10,
            losses: 6,
            pctRatio: .625
        },
        {
            division: "AFC East",
            name: "New York Jets",
            wins: 7,
            losses: 9,
            pctRatio: .438
        },
        {
            division: "AFC East",
            name: "Miami Dolphins",
            wins: 5,
            losses: 11,
            pctRatio: .313
        },
        {
            division: "AFC North",
            name: "Baltimore Ravens",
            wins: 14,
            losses: 2,
            pctRatio: .875
        },
        {
            division: "AFC North",
            name: "Pittsburgh Steelers",
            wins: 8,
            losses: 8,
            pctRatio: .500
        },
        {
            division: "AFC North",
            name: "Cleveland Browns",
            wins: 6,
            losses: 10,
            pctRatio: .375
        },
        {
            division: "AFC North",
            name: "Cincinnati Bengals",
            wins: 2,
            losses: 14,
            pctRatio: .125
        },
        {
            division: "AFC West",
            name: "Kansas City Chiefs",
            wins: 12,
            losses: 4,
            pctRatio: .750
        },
        {
            division: "AFC West",
            name: "Denver Broncos",
            wins: 7,
            losses: 9,
            pctRatio: .438
        },
        {
            division: "AFC West",
            name: "Oakland Raiders",
            wins: 7,
            losses: 9,
            pctRatio: .438
        },
        {
            division: "AFC West",
            name: "Los Angeles Chargers",
            wins: 5,
            losses: 11,
            pctRatio: .313
        },
        {
            division: "AFC South",
            name: "Houston Texans",
            wins: 10,
            losses: 6,
            pctRatio: .625
        },
        {
            division: "AFC South",
            name: "Tennessee Titans",
            wins: 9,
            losses: 7,
            pctRatio: .563
        },
        {
            division: "AFC South",
            name: "Indianapolis Colts",
            wins: 7,
            losses: 9,
            pctRatio: .438
        },
        {
            division: "AFC South",
            name: "Jacksonville Jaguars",
            wins: 6,
            losses: 10,
            pctRatio: .375
        }
    ]
});