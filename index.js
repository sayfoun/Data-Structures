function sumOfDistinctElements(set1, set2) {
let distinctElements = [];
let sum = 0;


for (let i = 0; i < set1.length; i++) {
    if (!distinctElements.includes(set1[i])) {
    distinctElements.push(set1[i]);
    sum += set1[i];
    }
}

return sum;
}






function dotProduct(v1, v2) {
let product = 0;

for (let i = 0; i < v1.length; i++) {
    product += v1[i] * v2[i];
}

return product;
}

function areVectorsOrthogonal(vectors) {
const n = vectors.length;

for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
    const dotProductResult = dotProduct(vectors[i], vectors[j]);
    if (dotProductResult !== 0) {
        return false;
    }
    }
}

return true;
}

