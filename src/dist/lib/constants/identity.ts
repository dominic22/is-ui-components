import { UserType, CredentialTypes } from 'iota-is-sdk';
import type { RegistrationUser } from '../types/identity';

export const USERS: RegistrationUser[] = [
	{
		type: UserType.Person,
		fields: [
			{
				name: 'username',
				required: true
			},
			{
				name: 'country',
				required: false
			}
		]
	},
	{
		type: UserType.Organization,
		fields: [
			{
				name: 'username',
				required: true
			}
		]
	},
	{
		type: UserType.Service,
		fields: [
			{
				name: 'username',
				required: true
			},
			{
				name: 'class',
				required: false
			}
		]
	},
	{
		type: UserType.Device,
		fields: [
			{
				name: 'username',
				required: true
			},
			{
				name: 'smartphone',
				required: false
			}
		]
	},
	{
		type: UserType.Product,
		fields: [
			{
				name: 'username',
				required: true
			}
		]
	},
	{
		type: UserType.Unknown,
		fields: [
			{
				name: 'username',
				required: true
			}
		]
	}
];

export const VC_TEMPLATES = [
	{
		id: 'demoTemplateProfessor',
		name: '[Demo Template] Professor',
		fields: [
			{
				id: 'fullName',
				label: 'Full name',
				type: 'text',
				required: true
			},
			{
				id: 'experience',
				label: 'Years of experience',
				type: 'number',
				required: true
			},
			{
				id: 'dateOfBirth',
				label: 'Date of birth',
				type: 'date',
				required: false
			}
		],
		credentialType: CredentialTypes.VerifiedIdentityCredential,
		userType: UserType.Person
	},
	{
		id: 'demoTemplateSmallCompany',
		name: '[Demo Template] Small company',
		fields: [
			{
				id: 'companyName',
				label: 'Company name',
				type: 'text',
				required: true
			},
			{
				id: 'employees',
				label: 'Total of employees',
				type: 'number',
				required: true
			},
			{
				id: 'country',
				label: 'Country',
				type: 'text',
				required: false
			},
			{
				id: 'city',
				label: 'City',
				type: 'text',
				required: false
			}
		],
		credentialType: CredentialTypes.BasicIdentityCredential,
		userType: UserType.Organization
	}
];

export const MAXIMUM_SEARCH_RESULTS = 100;

