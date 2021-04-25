const getContribution = (request, response) => {
    try {
        let contribution = {}
        const people = request.body.people
        const items = request.body.items
        const taxes = parseFloat(request.body.taxes)
        for (let i = 0, l = people.length; i < l; i++) {
            let person = people[i]
            let individual_contribution = 0
            for (let j = 0, len = items.length; j < len; j++) {
                let item = items[j]
                let item_contribution = item['price'] * (item['contri'][i] / 100)
                item_contribution *= (100 + (item['tax']) + taxes) / 100
                individual_contribution += item_contribution
            }
            contribution[person] = individual_contribution.toFixed(2)
        }
        response.status(200).send(JSON.stringify(contribution))
    } catch (error) {
        response.status(500).send({
            response: 'An Error occured on Our End',
            error
        })
    }
}

module.exports = {
    getContribution
}