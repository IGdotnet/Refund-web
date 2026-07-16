type userAPIRole = "employee" | "manager"

type userAPIResponse = {
    token: string,
    user: {
        id: string,
        nome: string,
        email: string,
        role: userAPIRole
    }
}