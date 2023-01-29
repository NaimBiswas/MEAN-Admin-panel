export class LoginModel {
    constructor(public email: String, public password: String) {
        return {
            email: this.email,
            password: this.password
        }
    }
}export class CreateOrUpdateUserModel {
    constructor(public email: string | undefined | null, 
        public password: string | undefined | null,
        public userName?: String | undefined | null, 
        public firstName?: string | undefined | null, 
        public lastName?: string | undefined | null, 
        public middleName?: string | undefined | null, 
        public role?: string | undefined | null, 
        public description?: string | undefined | null, 
        public image?: any | undefined | null,
        public isActive?: boolean | undefined | null,
        public isBlocked?: boolean | undefined | null,
        public isDeleted?: boolean | undefined | null,
        public acStatus?: string | undefined | null,
        ) {
        
        return {
            userName: this.userName, 
            email: this.email,
            password: this.password,
            firstName: this.firstName, 
            lastName: this.lastName, 
            middleName: this.middleName, 
            role: this.role, 
            description: this.description, 
            image: this.image,
            isActive: this.isActive || true,
            isBlocked: this.isBlocked || false,
            isDeleted: this.isDeleted || false,
            acStatus: this.acStatus || "Pending"
        }
    }
}