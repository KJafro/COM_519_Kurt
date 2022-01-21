const Entries = require('../models/Entries');

exports.list = async (req, res) => {
    console.log(req.session);
    try {

    
        const totalEntries = await Entries.find({}).count();
        const totalCountries = await Entries.aggregate([
            { $group: { _id: "$country", total: { $sum: 1 } } },
            { $count: "total" }
        ])
        console.log(totalCountries)
        const tasterCountSummaryRef = await Entries.aggregate(
            [
                { $match: { profile_name: { $ne: null } } },
                {
                    $group: {
                        _id: "$profile_name",
                        total: { $sum: 1 }
                    }
                }]);

        const tasterCountSummary = tasterCountSummaryRef.map(t => ({ name: t._id, total: t.total }));
        res.render("index", { tasterCountSummary: tasterCountSummary, totalEntries: totalEntries, totalTasters: tasterCountSummary.length, totalCountries: totalCountries[0].total });

    } catch (e) {
        console.log(e);
        res.status(404).send({
            message: `error rendering page`,
        });
    }
}