class Collection<T>{
    private models: T[];

    private constructor(models: T[]) {
        this.models = models;
    }

    static from<U>(models: U[]): Collection<U> {
        return new Collection(models);
    }

    filterBy(filterFunc: (model: T) => boolean): Collection<T> {
        return new Collection(this.models.filter(filterFunc));
    }

    mapBy<U>(mapFunc: (model: T) => U): Collection<U> {
        return new Collection(this.models.map(mapFunc));
    }

    groupBy<U>(groupFunc: (model: T) => U): Collection<T[]> {
        const map = new Map<U, T[]>();
        this.models.forEach(model => {
            const key = groupFunc(model);
            if (!map.has(key)) {
                map.set(key, []);
            }
            map.get(key)?.push(model);
        });
        return new Collection(Array.from(map.values()));
    }

    getModels(): T[] {
        return this.models;
    }

    getFirst(): T | undefined {
        return this.models[0];
    }

    getLast(): T | undefined {
        return this.models[this.models.length - 1];
    }

    getLength(): number {
        return this.models.length;
    }

    isEmpty(): boolean {
        return this.models.length === 0;
    }

    push(model: T): void {
        this.models.push(model);
    }

    pop(): T | undefined {
        return this.models.pop();
    }

    forEach(func: (model: T) => void): void {
        this.models.forEach(func);
    }

    summarizeBy(summarizeFunc: (model: T) => number): number {
        return this.models.reduce((acc, model) => {
            return acc + summarizeFunc(model);
        }, 0);
    }
}

export default Collection;