type ShoesPurposeType = 'dancing' | 'woodcutting' | 'walking';

type Shoes = {
    purpose: string;
}

class BalletFlat implements Shoes {
    purpose = 'dancing';
}

class Boot implements Shoes {
    purpose = 'woodcutting';
}

class Sneaker implements Shoes {
    purpose = 'walking';
}

class Factory {
    create(type: ShoesPurposeType): Shoes {
        switch (type) {
            case 'dancing': return new BalletFlat
            case 'woodcutting': return new Boot
            case 'walking': return new Sneaker
        }
    }
}

const factory = new Factory();

const firstShoe = factory.create('dancing');
const secondShoe = factory.create('woodcutting');
const thirdShoe = factory.create('walking');

console.log(firstShoe instanceof BalletFlat);
console.log(secondShoe instanceof Boot);
console.log(thirdShoe instanceof Sneaker);



