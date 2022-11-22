document.getElementById('data').addEventListener('keyup', function () {
  const data = document.getElementById('data').value;
  const rows = data.split('\n');
  if (rows) {
    const parsedData = rows.map(row => {
      const fields = row.split('\t');
      return {
        'sport': fields[0],
        'week': fields[1],
        'wager': fields[3],
        'winning': fields[4],
        'syndicate': fields[5],
        'platform': fields[6],
      }
    })

    // const plays = {};
    // parsedData.forEach(function (item) {
    //   plays[`${item.sport}-${item.week}-${item.syndicate}-${item.platform}`] = {
    //     sport: item.sport,
    //     week: item.week,
    //     syndicate: item.syndicate,
    //     platform: item.platform,
    //     wager: 0,
    //     winning: 0
    //   };
    // });

    // parsedData.forEach(function (item) {
    //   plays[`${item.sport}-${item.week}-${item.syndicate}-${item.platform}`].wager+=Number(item.wager);
    //   plays[`${item.sport}-${item.week}-${item.syndicate}-${item.platform}`].winning+=Number(item.winning);
    // });

    // let result = '';
    // const formatter = new Intl.NumberFormat({ style: 'currency' });
    // Object.keys(plays).forEach(function (value, key) {
    //   console.log('plays[value]', plays[value]);
    //   const v = plays[value];
    //   result += v.sport + ' - ' + v.week + ' - ' + v.syndicate + ' - ' + v.platform + ' - ' + formatter.format(v.wager) + ' - ' + formatter.format(v.winning) + ' - ' + formatter.format(v.winning - v.wager) + '<br>';
    // });

    const plays = {};
    parsedData.forEach(function (item) {
      plays[`${item.sport}-${item.week}-${item.syndicate}`] = {
        sport: item.sport,
        week: item.week,
        syndicate: item.syndicate,
        platform: item.platform,
        wager: 0,
        winning: 0
      };
    });

    parsedData.forEach(function (item) {
      plays[`${item.sport}-${item.week}-${item.syndicate}`].wager += Number(item.wager);
      plays[`${item.sport}-${item.week}-${item.syndicate}`].winning += Number(item.winning);
    });

    let result = '';
    const formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    });
    Object.keys(plays).forEach(function (value, key) {
      console.log('plays[value]', plays[value]);
      const v = plays[value];
      result += v.sport + ' | ' + v.week + ' | ' + v.syndicate + ' | ' + formatter.format(v.wager) + ' | ' + formatter.format(v.winning) + ' | ' + formatter.format(v.winning - v.wager) + '<br>';
    });
    document.getElementById('results').innerHTML = result;
  }
});
