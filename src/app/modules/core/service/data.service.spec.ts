import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { doesNotReject } from 'assert';
import { Pokemon } from 'src/app/models/pokemon.model';

describe('Service: DataService', () => {
    let service: DataService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
        });
        service = TestBed.inject(DataService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should be loaded pokemon pikachu', (done) => {
        service.getPokemon(25).subscribe((_: Pokemon) => {
            expect(_.name).toEqual('pikachu');
            done();
        });
    });
});
