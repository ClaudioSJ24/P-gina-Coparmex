export interface JwtDto {

    
    responseLogin: {

        token: string;
        user: string;
        grantedAuthorities: string[];
    };
    
}
