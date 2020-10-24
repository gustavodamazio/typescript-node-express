import app from '@server';

const PORT = Number(process.env.PORT || 3000);
app.listen(PORT, () => {
    console.log(`Express server started on port: ${PORT}`);
});
