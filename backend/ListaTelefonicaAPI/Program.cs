using ListaTelefonicaAPI.Data;
using ListaTelefonicaAPI.Mappings;
using ListaTelefonicaAPI.Repositories;
using ListaTelefonicaAPI.Repositories.Interfaces;
using ListaTelefonicaAPI.Services;
using ListaTelefonicaAPI.Services.Interfaces;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Configura��o de Logging
builder.Logging.AddConsole();

// Adicionar DbContext ao container de DI
builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));

//// Configura��o centralizada via IOptions<T>
//builder.Services.Configure<AppSettings>(builder.Configuration.GetSection("AppSettings"));

// Registrar Services e Repositories com diferentes lifetimes
builder.Services.AddScoped<IContatoRepository, ContatoRepository>();
builder.Services.AddScoped<IContatoService, ContatoService>();

// Configurar AutoMapper para mapeamento de Entities em DTOs
builder.Services.AddAutoMapper(cfg => { }, typeof(MappingProfile));

// Adicionar Controllers
builder.Services.AddControllers();

//// Configurar CORS para aceitar requisi��es de origem espec�fica
//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("AllowAll", policy =>
//    {
//        policy.AllowAnyOrigin()
//              .AllowAnyMethod()
//              .AllowAnyHeader();
//    });
//});

// Swagger/OpenAPI para documenta��o da API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

var app = builder.Build();

// Pipeline HTTP
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

//// Aplicar pol�tica de CORS
//app.UseCors("AllowAll");

app.UseAuthorization();

app.MapControllers();

app.Run();