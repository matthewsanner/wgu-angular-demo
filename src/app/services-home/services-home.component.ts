import { Component, OnInit } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-services-home',
  imports: [HighlightDirective, NgFor],
  templateUrl: './services-home.component.html',
  styleUrl: './services-home.component.css',
})
export class ServicesHomeComponent implements OnInit {
  bankingServices = [
    'Issue business loans',
    'Open new checking and/or saving accounts',
    'Help clients with account-related issues such as transfers, withdrawals, and deposits',
    'Provide periodic reports and analysis',
    'Monitor client accounts and keep information up to date',
    'Guide clients through their savings, loan, mortgage, and retirement options',
    'Refer customers to loan officers or other financial specialists',
    'Resolve debit and credit issues',
  ];

  ngOnInit(): void {}
}
