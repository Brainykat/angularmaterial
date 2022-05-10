import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Note } from '../../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit, AfterViewInit {

  @Input() notes : Note[] |undefined;

  displayedColumns: string[] = ['id', 'title', 'date'];
  dataSource!: MatTableDataSource<Note>;

  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Note>(this.notes);
  }

  @ViewChild(MatPaginator)paginator!: MatPaginator;
  @ViewChild(MatSort)sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
