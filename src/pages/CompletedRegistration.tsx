import Button from "../components/Button";
import Typography from "../components/Typography";

export default function CompletedRegistration() {
    return (
        <div>             
            <Typography as="h1" size="xl">Seu cadastro foi realizado com sucesso!</Typography>
            <Typography as="h3" size="md">Em breve você começará a receber vagas incríveis no seu e-mail.</Typography>
            <Button hasBackground onClickFunc={() => console.log('fechar')}>Fechar aba</Button>
        </div>
    );
};