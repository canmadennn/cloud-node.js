const hanaClient = require('@sap/hana-client');
const connParams = {
    host: 'd0b11981-d6d1-42ed-b57a-5d7a469691c9.hana.trial-us10.hanacloud.ondemand.com',
    port: '443',
    user: 'DBADMIN',
    password: 'Systempassword1'
};

function fetchData(query) {
    return new Promise((resolve, reject) => {
        const connection = hanaClient.createConnection();

        connection.connect(connParams, (err) => {
            if (err) {
                return reject('Bağlantı hatası: ' + err);
            }

            connection.exec(query, (err, rows) => {
                if (err) {
                    connection.disconnect();
                    return reject('Sorgu hatası: ' + err);
                }

                connection.disconnect();
                resolve(rows);
            });
        });
    });
}

// Modül dışa aktarımı
module.exports = { fetchData };